using Management.Data.DB;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
string databaseConnection = builder.Configuration["connectionString:mainDatabase"];
builder.Services.AddDbContext<DBContext>(opts => opts.UseSqlServer(databaseConnection));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x.AllowAnyHeader()
      .AllowAnyMethod()
      .AllowAnyOrigin()
      .SetIsOriginAllowed(origin => true));

app.UseStaticFiles();
app.UseAuthorization();
app.MapControllers();
app.Run();
