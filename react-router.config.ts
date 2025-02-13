import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  async prerender() { // add all routes here for pure server-side generation
    return ["/"];
  },
} satisfies Config;