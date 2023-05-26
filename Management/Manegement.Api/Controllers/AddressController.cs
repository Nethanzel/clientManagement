using Management.Data.DB;
using Management.Data.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Manegement.Api.Models
{
    [Route("/api/[controller]/")]
    public class AddressController : Controller
    {
        DBContext _dbContext = null;
        public AddressController(DBContext dBContext)
        {
            this._dbContext = dBContext;
        }

        [HttpGet]
        [Route("getOne")]
        public ActionResult<Address> GetAddressById(int id)
        {
            Address _address= _dbContext.Address.SingleOrDefault(ad => ad.AddressId == id);

            if (_address == null)
            {
                return NotFound();
            }
            return _address;
        }

        [HttpPut]
        public ActionResult UpdateAddress([FromBody]Address address)
        {
            if (!ModelState.IsValid)
            {
                return StatusCode(422);
            }

            bool foundAddress = _dbContext.Address.Any(x => x.AddressId == address.AddressId);

            if(!foundAddress)
            {
                return NotFound();
            }

            _dbContext.Update(address);
            _dbContext.SaveChanges();
            return NoContent();
        }

        [HttpDelete]
        public ActionResult DeleteAddress(int addressId)
        {
            Address address = _dbContext.Address.SingleOrDefault(ad => ad.AddressId == addressId);

            if (address == null)
            {
                return NotFound();
            }

            _dbContext.Address.Remove(address);
            _dbContext.SaveChanges();
            return NoContent();
        }

    }
}
