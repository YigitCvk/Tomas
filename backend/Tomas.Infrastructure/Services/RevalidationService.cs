using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System.Net.Http.Json;

namespace Tomas.Infrastructure.Services;

public class RevalidationService
{
    private readonly IHttpClientFactory _factory;
    private readonly ILogger<RevalidationService> _logger;
    private readonly string? _url;
    private readonly string? _secret;

    public RevalidationService(IHttpClientFactory factory, IConfiguration config, ILogger<RevalidationService> logger)
    {
        _factory = factory;
        _logger = logger;
        _url = config["Frontend:RevalidateUrl"];
        _secret = config["Frontend:RevalidateSecret"];
    }

    public void TriggerAsync()
    {
        if (string.IsNullOrEmpty(_url) || string.IsNullOrEmpty(_secret)) return;

        _ = Task.Run(async () =>
        {
            try
            {
                var client = _factory.CreateClient();
                client.Timeout = TimeSpan.FromSeconds(10);
                var req = new HttpRequestMessage(HttpMethod.Post, _url);
                req.Headers.Add("x-revalidate-secret", _secret);
                req.Content = JsonContent.Create(new { paths = new[] { "/" } });
                var res = await client.SendAsync(req);
                if (!res.IsSuccessStatusCode)
                    _logger.LogWarning("Frontend revalidation returned {Status}", res.StatusCode);
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "Frontend revalidation failed — site cache will expire naturally");
            }
        });
    }
}
