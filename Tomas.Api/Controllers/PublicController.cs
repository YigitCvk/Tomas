using Microsoft.AspNetCore.Mvc;
using Tomas.Application.DTOs;
using Tomas.Infrastructure.Services;

namespace Tomas.Api.Controllers;

[ApiController]
[Route("api/public")]
public class PublicController : ControllerBase
{
    private readonly PublicContentService _content;
    private readonly ContactService _contact;

    public PublicController(PublicContentService content, ContactService contact)
    {
        _content = content;
        _contact = contact;
    }

    [HttpGet("site-settings")]
    [ResponseCache(Duration = 300)]
    public async Task<IActionResult> SiteSettings() =>
        Ok(await _content.GetSiteSettingsAsync());

    [HttpGet("services")]
    [ResponseCache(Duration = 300)]
    public async Task<IActionResult> Services([FromQuery] string lang = "tr") =>
        Ok(await _content.GetServicesAsync(lang));

    [HttpGet("services/{slug}")]
    [ResponseCache(Duration = 300)]
    public async Task<IActionResult> ServiceBySlug(string slug, [FromQuery] string lang = "tr")
    {
        var result = await _content.GetServiceBySlugAsync(slug, lang);
        return result == null ? NotFound() : Ok(result);
    }

    [HttpGet("blog-posts")]
    [ResponseCache(Duration = 120)]
    public async Task<IActionResult> BlogPosts([FromQuery] string lang = "tr", [FromQuery] int page = 1, [FromQuery] int pageSize = 9) =>
        Ok(await _content.GetBlogPostsAsync(lang, page, pageSize));

    [HttpGet("blog-posts/{slug}")]
    [ResponseCache(Duration = 120)]
    public async Task<IActionResult> BlogPostBySlug(string slug, [FromQuery] string lang = "tr")
    {
        var result = await _content.GetBlogPostBySlugAsync(slug, lang);
        return result == null ? NotFound() : Ok(result);
    }

    [HttpGet("faqs")]
    [ResponseCache(Duration = 600)]
    public async Task<IActionResult> Faqs([FromQuery] string lang = "tr") =>
        Ok(await _content.GetFaqsAsync(lang));

    [HttpGet("testimonials")]
    [ResponseCache(Duration = 600)]
    public async Task<IActionResult> Testimonials([FromQuery] string lang = "tr") =>
        Ok(await _content.GetTestimonialsAsync(lang));

    [HttpGet("hero-slides")]
    [ResponseCache(Duration = 300)]
    public async Task<IActionResult> HeroSlides([FromQuery] string lang = "tr") =>
        Ok(await _content.GetHeroSlidesAsync(lang));

    [HttpGet("pages/{slug}")]
    [ResponseCache(Duration = 300)]
    public async Task<IActionResult> PageBySlug(string slug, [FromQuery] string lang = "tr")
    {
        var result = await _content.GetPageBySlugAsync(slug, lang);
        return result == null ? NotFound() : Ok(result);
    }

    [HttpPost("contact")]
    public async Task<IActionResult> Contact([FromBody] ContactFormDto dto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var ip = HttpContext.Connection.RemoteIpAddress?.ToString();
        var ua = Request.Headers.UserAgent.ToString();
        await _contact.SubmitAsync(dto, ip, ua);
        return Ok(new { success = true, message = "Mesajınız alındı. En kısa sürede size dönüş yapacağız." });
    }
}
