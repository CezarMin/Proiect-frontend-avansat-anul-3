using Microsoft.AspNetCore.Mvc;
using BackendProiect.Data;
using Microsoft.EntityFrameworkCore;
using BackendProiect.Models;

namespace BackendProiect.Controllers {
    [ApiController]
    [Route("/api/employees")]
    public class EmployeesController : Controller {
        private readonly DbContextProiect _dbContextProiect;
        public EmployeesController(DbContextProiect dbContextProiect) {
            _dbContextProiect = dbContextProiect;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllEmployees() {
           return Ok(await _dbContextProiect.Employees.ToListAsync());
        }

        [HttpPost]
        public async Task<IActionResult> AddNewEmployee([FromBody] Employee employeeRequest) {
            employeeRequest.Id = Guid.NewGuid();
            await _dbContextProiect.Employees.AddAsync(employeeRequest);
            await _dbContextProiect.SaveChangesAsync();
            return Ok(employeeRequest);
        }

    }
}
