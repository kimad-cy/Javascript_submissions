import { defineConfig } from '@vue/cli-service';

export default defineConfig({
  devServer: {
    client: {
      webSocketURL: {
        protocol: 'wss',  // Use 'wss' for secure WebSocket
        hostname: '10.0.10.41', // Change 'host' to 'hostname'
        port: 8080,
        pathname: '/ws'
      }
    }
  }
});
