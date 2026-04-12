using Microsoft.AspNetCore.Mvc;

namespace Service.Note.Controllers;

[ApiController]
[Route("/api/note/[controller]")]
public class DummyController : ControllerBase
{
    [HttpGet(Name = "HelloWorld")]
    public string Get()
    {
        return "Hello, World!";
    }
}
