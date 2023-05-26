using Management.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Management.Data.DB
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Client> Client { get; set; }
        public DbSet<Address> Address{ get; set; }
    }
}
