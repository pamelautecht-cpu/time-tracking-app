#!/bin/bash

echo "========================================"
echo "  FINDING YOUR IP ADDRESS FOR PHONE"
echo "========================================"
echo ""

# Try to find IP address
if command -v hostname &> /dev/null; then
    echo "Your computer's IP address is:"
    hostname -I | awk '{print $1}'
    IP=$(hostname -I | awk '{print $1}')
    echo ""
    echo "----------------------------------------"
    echo "On your phone, open browser and go to:"
    echo ""
    echo "   http://$IP:3000"
    echo ""
    echo "----------------------------------------"
elif command -v ipconfig &> /dev/null; then
    echo "Run this command to find your IP:"
    echo "ipconfig"
    echo "Look for 'IPv4 Address'"
else
    echo "Run one of these commands:"
    echo "  Windows: ipconfig"
    echo "  Mac: ipconfig getifaddr en0"
    echo "  Linux: hostname -I"
fi

echo ""
echo "Make sure:"
echo "1. Your phone is on the SAME WiFi as this computer"
echo "2. You've run 'npm run dev' on this computer"
echo ""
