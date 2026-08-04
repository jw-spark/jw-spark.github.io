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
        START_HOUR: 7,
        END_HOUR: 19
    },

    REFRESH_INTERVAL_MS: 5 * 60 * 1000,
    DELAY_THRESHOLD_MINUTES: 15,

    // Existing dashboard history setting
    HISTORY_LIMIT: 500,

    PREDICTION: {
        // Existing prediction settings
        SAME_WEEKDAY_ONLY: true,
        BUCKET_MINUTES: 30,
        LIVE_WEIGHT: 0.7,
        HISTORY_WEIGHT: 0.3,

        // Historical lookup settings
        QUERY_LIMIT: 10000,
        PAGE_SIZE: 1000,
        MIN_MATCHING_SAMPLES: 50,

        // Arrival times separated by more than 10 minutes
        // are treated as different arrival slots.
        CLUSTER_GAP_MINUTES: 10,

        // Explicit timezone for weekday and hour matching
        TIME_ZONE: "Asia/Singapore"
    }
};
