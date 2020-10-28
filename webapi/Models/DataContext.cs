using Microsoft.EntityFrameworkCore;

namespace webapi.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) {}

        public DbSet<Team> Teams { get; set; }

        public DbSet<Player> Players { get; set; }
    }
}