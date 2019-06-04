using System;
using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Dtos
{
    public class PhotoForCreaionDto
    {
        public string Url { get; set; }
        public IFormFile File { get; set; }
        public string Dercption { get; set; }
        public DateTime DateAdded { get; set; }
        public string PublicId { get; set; }

        public PhotoForCreaionDto(){
            DateAdded=DateTime.Now;
        }
    }
}