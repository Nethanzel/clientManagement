using Azure.Core;
using Management.Data.DB;
using Management.Data.Models;
using Manegement.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace Manegement.Api.Controllers
{
    [Route("/api/[controller]/")]
    public class ClientsController : Controller
    {
        private DBContext _dbContext = null;
        public ClientsController(DBContext context)
        { 
            this._dbContext = context;
        }

        [HttpGet]
        public List<Client> GetClients()
        {
            return _dbContext.Client.Include(cl => cl.Addresses).Where(cl => cl.Deleted == false).ToList();
        }

        [HttpGet]
        [Route("getOne")]
        public ActionResult<Client> GetClientById(int id)
        {
            Client _client = _dbContext.Client.Include(cl => cl.Addresses).SingleOrDefault(cl => cl.ClientId == id && cl.Deleted == false);

            if( _client == null )
            {
                return NotFound();
            }
            return _client;
        }

        [HttpPut]
        [Route("Update")]
        public ActionResult UpdateClient([FromBody]Client client)
        {
            if (!ModelState.IsValid)
            {
                return StatusCode(422);
            }

            _dbContext.Update(client);
            _dbContext.SaveChanges();
            return NoContent();
        }

        [HttpPost]
        [Route("appendAddress")]
        public ActionResult AppendAddress([FromBody]AddressCreate address)
        {
            if (!ModelState.IsValid)
            {
                return StatusCode(422);
            }

            Client client = _dbContext.Client.SingleOrDefault(cl => cl.ClientId == address.uid && cl.Deleted == false);
            if (client != null)
            {
                Address newAddress = new Address
                {
                    City = address.City,
                    Street = address.Street,
                    Country = address.Country
                };

                if (client.Addresses == null)
                {
                    client.Addresses = new List<Address>();
                    client.Addresses.Add(newAddress);
                }
                else
                {
                    client.Addresses.Add(newAddress);
                }

                _dbContext.Update(client);
                _dbContext.SaveChanges();
                return NoContent();
            }
            return NotFound();
        }

        [HttpPost]
        [Route("Create")]
        public ActionResult CreateClient([FromBody]ClientCreate newClient)
        {
            if(!ModelState.IsValid)
            {
                return StatusCode(422);
            }

            Client newClientModel = new Client()
            { 
                FirstName = newClient.FirstName,
                LastName = newClient.LastName,
                Phone = newClient.Phone,
                Email = newClient.Email
            };
            _dbContext.Client.Add(newClientModel);
            _dbContext.SaveChanges();
            return NoContent();
        }

        [HttpDelete]
        public ActionResult DeleteClient(int id)
        {
            Client client = _dbContext.Client.SingleOrDefault(cl => cl.ClientId == id);

            if (client == null)
            {
                return NotFound();
            }

            client.Deleted = true;

            _dbContext.Update(client);
            _dbContext.SaveChanges();
            return NoContent();
        }
    }
}
