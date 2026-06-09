// CONFIGURATION FILE
const CONFIG = {
    SUPABASE_URL: "https://klqphxtpwmlkfvueukpx.supabase.co",
    SUPABASE_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtscXBoeHRwd21sa2Z2dWV1a3B4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MDAxMjcsImV4cCI6MjA5NjQ3NjEyN30.A8u8fDqygw_3n-kAZMJGOsUoz-Jp_eBarLH9PBvgoow",

    BUS_STOPS: ["97039"],

    FILTER: {
        ENABLE_SERVICE_FILTER: false,
        SERVICES: ["2", "5", "24"]
    },

    DEDUP: {
        ENABLE: true,
        FUTURE_ONLY: true
    },

    TIME_WINDOW: {
        ENABLE: false,
        START_HOUR: 16,
        END_HOUR: 18
    },

    REFRESH_INTERVAL_MS: 5 * 60 * 1000
};
