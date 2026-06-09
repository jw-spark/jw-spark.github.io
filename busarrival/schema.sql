create table if not exists bus_arrivals (
id bigserial primary key,
bus_stop_code text,
service_no text,
sequence text,
estimated_arrival timestamptz,
collected_at timestamptz
);

alter table bus_arrivals disable row level security;
