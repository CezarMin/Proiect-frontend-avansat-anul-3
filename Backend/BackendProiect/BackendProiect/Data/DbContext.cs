using BackendProiect.Models;
using Microsoft.EntityFrameworkCore;
namespace BackendProiect.Data {
    public class DbContextProiect: DbContext {
        public DbContextProiect(DbContextOptions options): base(options) {

        }

        public DbSet<Employee> Employees { get; set; }
    }
}
