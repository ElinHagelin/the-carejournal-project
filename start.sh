#!/bin/bash

# Start Next.js
cd next-frontend
npm run dev &

# Start Nest.js
cd ../nest-backend
npm run start:dev &

# Wait for all background processes to finish
wait