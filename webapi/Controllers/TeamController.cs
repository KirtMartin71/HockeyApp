using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamController : ControllerBase
    {
        private readonly DataContext dc;

        public TeamController(DataContext dc)
        {
            this.dc = dc;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetTeams()
        {
            var team = await dc.Teams.ToListAsync();

            if ( team == null ) {
                return NotFound();
            }

            return Ok(team);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTeamById(int id)
        {
            var team = await dc.Teams.FindAsync(id);
            
            if ( team == null ) {
                return NotFound();
            }

            return Ok(team);
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddTeam(Team team)
        {
            await dc.Teams.AddAsync(team);
            await dc.SaveChangesAsync();
            
            return StatusCode(201);
        }

        

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteTeam(int id)
        {
            var team = await dc.Teams.FindAsync(id);
            dc.Teams.Remove(team);
            await dc.SaveChangesAsync();
            
            return StatusCode(200);
        }
    }
}