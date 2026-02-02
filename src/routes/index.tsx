import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Clock, Users, Languages, UserPlus, FileText } from "lucide-react";

export const Route = createFileRoute("/")({
  component: App,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      employee: (search.employee as string) || undefined,
      phone: (search.phone as string) || undefined,
      email: (search.email as string) || undefined,
    };
  },
});

type Language = 'en' | 'es';

enum UserRole {
  Manager = 'Manager',
  Employee = 'Employee',
}

interface User {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: UserRole;
  hourly_rate: number | null;
}

interface TimeCard {
  id: string;
  user_id: string;
  clock_in: string;
  clock_out: string | null;
  hours: number | null;
}

const translations = {
  en: {
    appTitle: "Employee Time Tracking",
    selectAccount: "Select your account to continue",
    selectUser: "Select User",
    manager: "Manager",
    employee: "Employee",
    switchUser: "Switch User",
    welcome: "Welcome",
    clockInOut: "Clock In/Out",
    currentlyClocked: "Currently Clocked In",
    since: "Since",
    clockOut: "Clock Out",
    notClocked: "Not currently clocked in",
    clockIn: "Clock In",
    timeCardHistory: "Time Card History",
    clockInTime: "Clock In",
    clockOutTime: "Clock Out",
    hours: "Hours",
    totalEmployees: "Total Employees",
    hoursToday: "Hours Today",
    allEmployeeTimeCards: "All Employee Time Cards",
    employeeName: "Employee",
    actions: "Actions",
    employees: "Employees",
    addEmployee: "Add Employee",
    name: "Name",
    email: "Email",
    phone: "Phone",
    role: "Role",
    hourlyRate: "Hourly Rate",
    cancel: "Cancel",
    save: "Save",
    copyMyLink: "Copy My Link",
  },
  es: {
    appTitle: "Seguimiento de Tiempo de Empleados",
    selectAccount: "Seleccione su cuenta para continuar",
    selectUser: "Seleccionar Usuario",
    manager: "Gerente",
    employee: "Empleado",
    switchUser: "Cambiar Usuario",
    welcome: "Bienvenido",
    clockInOut: "Entrada/Salida",
    currentlyClocked: "Actualmente Registrado",
    since: "Desde",
    clockOut: "Registrar Salida",
    notClocked: "No está registrado actualmente",
    clockIn: "Registrar Entrada",
    timeCardHistory: "Historial de Tarjetas de Tiempo",
    clockInTime: "Entrada",
    clockOutTime: "Salida",
    hours: "Horas",
    totalEmployees: "Total de Empleados",
    hoursToday: "Horas Hoy",
    allEmployeeTimeCards: "Todas las Tarjetas de Tiempo",
    employeeName: "Empleado",
    actions: "Acciones",
    employees: "Empleados",
    addEmployee: "Agregar Empleado",
    name: "Nombre",
    email: "Correo",
    phone: "Teléfono",
    role: "Rol",
    hourlyRate: "Tarifa por Hora",
    cancel: "Cancelar",
    save: "Guardar",
    copyMyLink: "Copiar Mi Enlace",
  },
};

function App() {
  const search = Route.useSearch();
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showUserSelect, setShowUserSelect] = useState(true);
  const [timeCards, setTimeCards] = useState<TimeCard[]>([]);
  const [activeTimeCard, setActiveTimeCard] = useState<TimeCard | null>(null);

  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    phone: '',
    hourly_rate: '',
  });

  // Load data from localStorage
  useEffect(() => {
    const savedUsers = localStorage.getItem('timetracking_users');
    const savedTimeCards = localStorage.getItem('timetracking_timecards');

    if (savedUsers) {
      const parsedUsers = JSON.parse(savedUsers);
      setUsers(parsedUsers);

      // Auto-login from URL
      if (search.employee || search.phone || search.email) {
        let user = parsedUsers.find((u: User) => u.id === search.employee);

        if (!user && search.phone) {
          user = parsedUsers.find((u: User) =>
            u.phone && u.phone.replace(/[\s\-\(\)]/g, '') === search.phone?.replace(/[\s\-\(\)]/g, '')
          );
        }

        if (!user && search.email) {
          user = parsedUsers.find((u: User) =>
            u.email && u.email.toLowerCase() === search.email?.toLowerCase()
          );
        }

        if (user) {
          setCurrentUser(user);
          setShowUserSelect(false);
        } else if (search.phone || search.email) {
          // Auto-create employee from URL
          const newUser: User = {
            id: search.employee || crypto.randomUUID(),
            name: search.email ? search.email.split('@')[0] : 'Employee',
            email: search.email || '',
            phone: search.phone || null,
            role: UserRole.Employee,
            hourly_rate: null,
          };
          const updatedUsers = [...parsedUsers, newUser];
          setUsers(updatedUsers);
          localStorage.setItem('timetracking_users', JSON.stringify(updatedUsers));
          setCurrentUser(newUser);
          setShowUserSelect(false);
        }
      }
    } else {
      // Initialize with demo data
      const demoUsers: User[] = [
        {
          id: '1',
          name: 'Manager User',
          email: 'manager@example.com',
          phone: '555-0001',
          role: UserRole.Manager,
          hourly_rate: null,
        },
        {
          id: '2',
          name: 'John Doe',
          email: 'john@example.com',
          phone: '555-0002',
          role: UserRole.Employee,
          hourly_rate: 15,
        },
      ];
      setUsers(demoUsers);
      localStorage.setItem('timetracking_users', JSON.stringify(demoUsers));
    }

    if (savedTimeCards) {
      setTimeCards(JSON.parse(savedTimeCards));
    }
  }, []);

  // Find active time card for current user
  useEffect(() => {
    if (currentUser) {
      const active = timeCards.find(tc => tc.user_id === currentUser.id && !tc.clock_out);
      setActiveTimeCard(active || null);
    }
  }, [currentUser, timeCards]);

  const handleClockIn = () => {
    if (!currentUser) return;

    const newTimeCard: TimeCard = {
      id: crypto.randomUUID(),
      user_id: currentUser.id,
      clock_in: new Date().toISOString(),
      clock_out: null,
      hours: null,
    };

    const updated = [...timeCards, newTimeCard];
    setTimeCards(updated);
    localStorage.setItem('timetracking_timecards', JSON.stringify(updated));
  };

  const handleClockOut = () => {
    if (!activeTimeCard) return;

    const clockOutTime = new Date();
    const clockInTime = new Date(activeTimeCard.clock_in);
    const hours = (clockOutTime.getTime() - clockInTime.getTime()) / (1000 * 60 * 60);

    const updated = timeCards.map(tc =>
      tc.id === activeTimeCard.id
        ? { ...tc, clock_out: clockOutTime.toISOString(), hours: Math.round(hours * 100) / 100 }
        : tc
    );

    setTimeCards(updated);
    localStorage.setItem('timetracking_timecards', JSON.stringify(updated));
  };

  const handleAddEmployee = () => {
    const employee: User = {
      id: crypto.randomUUID(),
      name: newEmployee.name,
      email: newEmployee.email,
      phone: newEmployee.phone || null,
      role: UserRole.Employee,
      hourly_rate: newEmployee.hourly_rate ? parseFloat(newEmployee.hourly_rate) : null,
    };

    const updated = [...users, employee];
    setUsers(updated);
    localStorage.setItem('timetracking_users', JSON.stringify(updated));
    setShowAddEmployee(false);
    setNewEmployee({ name: '', email: '', phone: '', hourly_rate: '' });
  };

  const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleString();
  };

  const userTimeCards = timeCards.filter(tc => tc.user_id === currentUser?.id);
  const employees = users.filter(u => u.role === UserRole.Employee);

  if (showUserSelect) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <CardTitle className="text-2xl">{t.appTitle}</CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              >
                <Languages className="w-4 h-4 mr-2" />
                {language === 'en' ? 'ES' : 'EN'}
              </Button>
            </div>
            <CardDescription>{t.selectAccount}</CardDescription>
          </CardHeader>
          <CardContent>
            <Select onValueChange={(value) => {
              const user = users.find(u => u.id === value);
              if (user) {
                setCurrentUser(user);
                setShowUserSelect(false);
              }
            }}>
              <SelectTrigger>
                <SelectValue placeholder={t.selectUser} />
              </SelectTrigger>
              <SelectContent>
                {users.map(user => (
                  <SelectItem key={user.id} value={user.id}>
                    {user.name} ({user.role === UserRole.Manager ? t.manager : t.employee})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentUser?.role === UserRole.Employee) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t.welcome}, {currentUser.name}!
              </h1>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              >
                <Languages className="w-4 h-4 mr-2" />
                {language === 'en' ? 'ES' : 'EN'}
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  const baseUrl = window.location.origin + window.location.pathname;
                  const link = `${baseUrl}?employee=${currentUser.id}${currentUser.phone ? `&phone=${encodeURIComponent(currentUser.phone)}` : ''}${currentUser.email ? `&email=${encodeURIComponent(currentUser.email)}` : ''}`;
                  navigator.clipboard.writeText(link);
                  alert(`${t.copyMyLink}!\n\n${link}`);
                }}
              >
                {t.copyMyLink}
              </Button>
              <Button variant="ghost" onClick={() => {
                setCurrentUser(null);
                setShowUserSelect(true);
              }}>
                {t.switchUser}
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {t.clockInOut}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeTimeCard ? (
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm text-green-700 dark:text-green-300">{t.currentlyClocked}</p>
                    <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                      {t.since}: {formatTime(activeTimeCard.clock_in)}
                    </p>
                  </div>
                  <Button onClick={handleClockOut} size="lg" className="w-full" variant="destructive">
                    {t.clockOut}
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">{t.notClocked}</p>
                  <Button onClick={handleClockIn} size="lg" className="w-full">
                    {t.clockIn}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.timeCardHistory}</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t.clockInTime}</TableHead>
                    <TableHead>{t.clockOutTime}</TableHead>
                    <TableHead>{t.hours}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userTimeCards.slice().reverse().slice(0, 10).map(tc => (
                    <TableRow key={tc.id}>
                      <TableCell>{formatTime(tc.clock_in)}</TableCell>
                      <TableCell>{tc.clock_out ? formatTime(tc.clock_out) : '-'}</TableCell>
                      <TableCell>{tc.hours ? tc.hours.toFixed(2) : '-'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Manager View
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t.welcome}, {currentUser?.name}!
            </h1>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            >
              <Languages className="w-4 h-4 mr-2" />
              {language === 'en' ? 'ES' : 'EN'}
            </Button>
          </div>
          <Button variant="ghost" onClick={() => {
            setCurrentUser(null);
            setShowUserSelect(true);
          }}>
            {t.switchUser}
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t.totalEmployees}</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{employees.length}</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                {t.employees}
              </CardTitle>
              <Button onClick={() => setShowAddEmployee(true)}>
                <UserPlus className="w-4 h-4 mr-2" />
                {t.addEmployee}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t.name}</TableHead>
                  <TableHead>{t.email}</TableHead>
                  <TableHead>{t.phone}</TableHead>
                  <TableHead>{t.hourlyRate}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map(emp => (
                  <TableRow key={emp.id}>
                    <TableCell>{emp.name}</TableCell>
                    <TableCell>{emp.email}</TableCell>
                    <TableCell>{emp.phone || '-'}</TableCell>
                    <TableCell>{emp.hourly_rate ? `$${emp.hourly_rate}` : '-'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              {t.allEmployeeTimeCards}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t.employeeName}</TableHead>
                  <TableHead>{t.clockInTime}</TableHead>
                  <TableHead>{t.clockOutTime}</TableHead>
                  <TableHead>{t.hours}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {timeCards.slice().reverse().slice(0, 20).map(tc => {
                  const employee = users.find(u => u.id === tc.user_id);
                  return (
                    <TableRow key={tc.id}>
                      <TableCell>{employee?.name || 'Unknown'}</TableCell>
                      <TableCell>{formatTime(tc.clock_in)}</TableCell>
                      <TableCell>{tc.clock_out ? formatTime(tc.clock_out) : '-'}</TableCell>
                      <TableCell>{tc.hours ? tc.hours.toFixed(2) : '-'}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Dialog open={showAddEmployee} onOpenChange={setShowAddEmployee}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t.addEmployee}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label>{t.name}</Label>
                <Input
                  value={newEmployee.name}
                  onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                />
              </div>
              <div>
                <Label>{t.email}</Label>
                <Input
                  type="email"
                  value={newEmployee.email}
                  onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                />
              </div>
              <div>
                <Label>{t.phone}</Label>
                <Input
                  value={newEmployee.phone}
                  onChange={(e) => setNewEmployee({ ...newEmployee, phone: e.target.value })}
                />
              </div>
              <div>
                <Label>{t.hourlyRate}</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={newEmployee.hourly_rate}
                  onChange={(e) => setNewEmployee({ ...newEmployee, hourly_rate: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowAddEmployee(false)}>
                {t.cancel}
              </Button>
              <Button onClick={handleAddEmployee} disabled={!newEmployee.name || !newEmployee.email}>
                {t.save}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
