using System.ComponentModel.DataAnnotations;

namespace Manegement.Api.Models
{
    public class ClientCreate
    {
        [Required(ErrorMessage = "Please write your first name")]
        [StringLength(20, MinimumLength = 4, ErrorMessage = "Must be at least 4 characters long.")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Please write your last name")]
        [StringLength(20, MinimumLength = 4, ErrorMessage = "Must be at least 4 characters long.")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Please write your last name")]
        [StringLength(20, MinimumLength = 4, ErrorMessage = "Must be at least 4 characters long.")]

        [RegularExpression(@"^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$")]
        public string Email { get; set; }

        [RegularExpression(@"[0-9]{3}-[0-9]{3}-[0-9]{4}")]
        public string Phone { get; set; }
    }
}
