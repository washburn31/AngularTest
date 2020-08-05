using AngularTest.Api.Models;
using AngularTest.Api.Persistence;
using System;
using System.Threading.Tasks;

namespace AngularTest.Api.Services
{
    public class SignalService : ISignalService
    {
        private readonly MainDbContext _mainDbContext;

        public SignalService(MainDbContext mainDbContext)
        {
            this._mainDbContext = mainDbContext;
        }

        public async Task<bool> SavesSignalAsync(SignalInputModel signalInputModel)
        {
            try
            {
                var signalDataModel = new SignalDataModel
                {
                    CustomerName = signalInputModel.CustomerName,
                    Description = signalInputModel.Description,
                    AccessCode = signalInputModel.AccessCode,
                    Area = signalInputModel.Area,
                    Zone = signalInputModel.Zone,
                    SignalDate = DateTime.Now
                };

                this._mainDbContext.Signals.Add(signalDataModel);
                return await this._mainDbContext.SaveChangesAsync() > 0;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
