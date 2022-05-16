using Microsoft.AspNetCore.Mvc;
using Microsoft.CognitiveServices.Speech;

namespace NamePronunciationTool.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TextToSpeechController : ControllerBase
    {
        static string YourSubscriptionKey = "2597278b8f384a479e8e3f5609bbdca0";
        static string YourServiceRegion = "eastus";

        private readonly ILogger<TextToSpeechController> _logger;

        public TextToSpeechController(ILogger<TextToSpeechController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] TextToSpeech paramTextToSpeech)
        {
            var config = SpeechConfig.FromSubscription(YourSubscriptionKey, YourServiceRegion);
            using var synthesizer = new SpeechSynthesizer(config);
            return Ok(await synthesizer.SpeakTextAsync(paramTextToSpeech.NameText));
        }
    }
}
