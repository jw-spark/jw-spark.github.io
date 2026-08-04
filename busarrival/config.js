// CONFIGURATION FILE
const CONFIG = {
    SUPABASE_URL: "https://klqphxtpwmlkfvueukpx.supabase.co",
    SUPABASE_KEY: "sb_publishable_dhPq5ssXWqeB084gDSOe-A_igNiQVpg",

    BUS_STOPS: [
        "97039"
    ],

    DEBUG: {
        ENABLE: true
    },

    FILTER: {
        ENABLE_SERVICE_FILTER: false,

        SERVICES: [
            "2",
            "5",
            "24"
        ]
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

    HISTORY_LIMIT: 500,

    PREDICTION: {
        SAME_WEEKDAY_ONLY: true,

        BUCKET_MINUTES: 30,

        LIVE_WEIGHT: 0.7,

        HISTORY_WEIGHT: 0.3,

        // Maximum number of past records to search.
        QUERY_LIMIT: 10000,

        // Supabase normally allows up to 1,000 rows per response.
        PAGE_SIZE: 1000,

        // Stop searching after this many matching records are found.
        MIN_MATCHING_SAMPLES: 20,

        // Arrival records separated by more than this value
        // are treated as separate arrival slots.
        CLUSTER_GAP_MINUTES: 10,

        TIME_ZONE: "Asia/Singapore",

        // Keep this as true if your sequence column contains "next".
        // Change it to false if page 1 returns 0 rows even though
        // bus_arrivals contains records.
        FILTER_SEQUENCE_NEXT: true
    }
};
