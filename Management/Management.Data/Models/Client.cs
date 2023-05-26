using System.ComponentModel.DataAnnotations;

namespace Management.Data.Models
{
    public class Client
    {
        [Key]
        public int ClientId { get; set; }

        [Required(ErrorMessage = "Please write your first name")]
        [StringLength(20, MinimumLength = 4, ErrorMessage = "Must be at least 4 characters long.")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Please write your last name")]
        [StringLength(20, MinimumLength = 4, ErrorMessage = "Must be at least 4 characters long.")]
        public string LastName { get; set; }
        public ICollection<Address> Addresses { get; set; }

        [RegularExpression(@"^[^@\s]+@[^@\s]+\.[^@\s]+$")]
        public string Email { get; set; }

        [RegularExpression(@"[0-9]{3}-[0-9]{3}-[0-9]{4}")]
        public string Phone { get; set; }
        public bool Deleted { get; set; } = false;
    }
}