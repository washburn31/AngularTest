using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularTest.Api.Hubs;
using AngularTest.Api.Models;
using AngularTest.Api.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;

namespace AngularTest.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SignalController : ControllerBase
    {
        private readonly ISignalService _signalService;
        private readonly IHubContext<SignalHub> _hubContext;

        public SignalController(ISignalService signalService, IHubContext<SignalHub> hubContext)
        {
            this._signalService = signalService;
            this._hubContext = hubContext;
        }

        [HttpPost]
        [Route("deliverypoint")]
        [ProducesResponseType(404)]
        [ProducesResponseType(200, Type = typeof(bool))]
        public async Task<IActionResult> SignalArrived(SignalInputModel signalInputModel)
        {
            var saveResult = await this._signalService.SavesSignalAsync(signalInputModel);
            if (saveResult)
            {
                var signalViewModel = new SignalViewModel
                {
                    Description = signalInputModel.Description,
                    CustomerName = signalInputModel.CustomerName,
                    Area = signalInputModel.Area,
                    Zone = signalInputModel.Zone,
                    SignalStamp = Guid.NewGuid().ToString(),

                };

                await this._hubContext.Clients.All.SendAsync("SignalMessageReceived", signalViewModel);
            }

            return StatusCode(200, saveResult);
        }
    }
}
