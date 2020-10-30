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
    public class RosterController : ControllerBase
    {
        private readonly DataContext dc;
        public RosterController(DataContext dc)
        {
            this.dc = dc;
        }

       [HttpGet("{teams_id}")]
        public async Task<IEnumerable<Player>> GetRosterByTeam(int teams_id){
           
            List<Player> players = await 
                (from p in dc.Players
                where p.teams_id == teams_id
                orderby p.last_name, p.first_name
                select p)
                .ToListAsync();
            
            return players;    
        }

    }
}