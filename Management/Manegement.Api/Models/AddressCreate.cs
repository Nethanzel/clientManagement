using System.ComponentModel.DataAnnotations;

namespace Manegement.Api.Models
{
    public class AddressCreate
    {
        public int uid {  get; set; }

        [Required(ErrorMessage = "Please write a street name")]
        [StringLength(40, MinimumLength = 4, ErrorMessage = "Must be at least 4 characters long.")]
        public string Street { get; set; }

        [Required(ErrorMessage = "Please write a city name")]
        [StringLength(20, MinimumLength = 4, ErrorMessage = "Must be at least 4 characters long.")]
        public string City { get; set; }

        [Required(ErrorMessage = "Please write a country name")]
        [StringLength(20, MinimumLength = 4, ErrorMessage = "Must be at least 4 characters long.")]
        public string Country { get; set; }
    }
}
