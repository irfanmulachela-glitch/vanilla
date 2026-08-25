#!/bin/bash
# Keep Supabase alive - run every 2 days
# Usage: ./scripts/keep-supabase-alive.sh

# Vanilla project
curl -s "https://gfauknvhamlvdfqmywjd.supabase.co/rest/v1/" -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmYXVrbnZoYW1sdmRmcW15d2pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3OTIyODgsImV4cCI6MjEwMjM2ODI4OH0.tqbiSqM8YWc0ya_1E4yeRsXMM7jCPPewKdlpIaS66Fs" > /dev/null
echo "Vanilla project pinged"

# Other project
curl -s "https://rwzbfldfaxipxyqslccs.supabase.co/rest/v1/" -H "apikey: sb_publishable_TRs36U6Y1fGk4EKavFp3qA_yh-ARtIJ" > /dev/null
echo "Other project pinged"

echo "All projects pinged at $(date)"
