# Use official Bun image
FROM oven/bun:latest

# Set working directory
WORKDIR /app

# Copy package files first for caching
COPY bun.lock package.json ./

# Install dependencies
RUN bun install

# Copy the rest of the source code
COPY . .

# Build the SolidStart app
RUN bun run build

# Expose the port your app runs on (default SolidStart is 3000)
EXPOSE 3000

# Start the server
CMD ["bun", "start"]