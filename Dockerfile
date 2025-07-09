# Use the official Node.js image.
FROM node:16

# Set the working directory.
<<<<<<< HEAD
WORKDIR /zamio_artist_pro
=======
WORKDIR /zamio_admin_pro
>>>>>>> 4d63dbec7119255807124bca3c7d28e7055eef3c

# Copy package.json and package-lock.json (if available).
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application files.
COPY . .

# Expose the port the app runs on.
#EXPOSE 5173

# Command to run the app.
CMD ["npm", "run", "dev"]
