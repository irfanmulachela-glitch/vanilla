#!/bin/bash
# Keep Supabase alive - run every 5 days
# Usage: ./scripts/keep-supabase-alive.sh

SUPABASE_URL="https://gfauknvhamlvdfqmywjd.supabase.co"
API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmYXVrbnZoYW1sdmRmcW15d2pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3OTIyODgsImV4cCI6MjEwMjM2ODI4OH0.tqbiSqM8YWc0ya_1E4yeRsXMM7jCPPewKdlpIaS66Fs"

echo "Pinging Supabase to keep it alive..."
curl -s "${SUPABASE_URL}/rest/v1/" -H "apikey: ${API_KEY}" > /dev/null
echo "Done - Supabase pinged at $(date)"
