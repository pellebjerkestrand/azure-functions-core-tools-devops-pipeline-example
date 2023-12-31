import { devices } from "@playwright/test";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

export default {
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  use: {
    baseURL: "http://localhost:7071/",
    headless: true,
  },
  webServer: {
    command: "npm start",
    port: 7071,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
};
