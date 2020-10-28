using System;

namespace webapi.Models
{
    public class Player
    {
        public int id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string position { get; set; }
        public DateTime roster_date { get; set; }
        public int teams_id { get; set; }
        public int jersey_number { get; set; }
        public string picture { get; set; }
    }
}