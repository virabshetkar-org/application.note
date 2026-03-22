using Microsoft.AspNetCore.Mvc;

namespace Service.Note.Controllers;

[ApiController]
[Route("/api/note/[controller]")]
public class ConfigurationController : ControllerBase
{
    private readonly IConfiguration _config;

    public ConfigurationController(IConfiguration configuration)
    {
        _config = configuration;
    }

    [HttpGet(Name = "GetConfiguration")]
    public Dictionary<string, string?> Get()
    {
        var config = _config.AsEnumerable().Where(x => x.Value is not null).ToDictionary();
        return config;
    }
}
