using AngularTest.Api.Models;
using System.Threading.Tasks;

namespace AngularTest.Api.Services
{
    public interface ISignalService
    {
        Task<bool> SavesSignalAsync(SignalInputModel signalInputModel);
    }
}
