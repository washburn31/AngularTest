using Microsoft.EntityFrameworkCore;

namespace AngularTest.Api.Persistence
{
  public class MainDbContext : DbContext
  {
    public MainDbContext(DbContextOptions<MainDbContext> options) : base(options)
    {

    }

    public DbSet<SignalDataModel> Signals { get; set; }
  }
}
