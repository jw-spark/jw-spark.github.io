// CONFIGURATION FILE
const CONFIG = {
    SUPABASE_URL: "https://klqphxtpwmlkfvueukpx.supabase.co",
    SUPABASE_KEY: "sb_publishable_dhPq5ssXWqeB084gDSOe-A_igNiQVpg",

    BUS_STOPS: ["97039"],

    DEBUG: {
        ENABLE: true
    },

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

    REFRESH_INTERVAL_MS: 5 * 60 * 1000,    
    DELAY_THRESHOLD_MINUTES: 15,
    HISTORY_LIMIT: 500

};
