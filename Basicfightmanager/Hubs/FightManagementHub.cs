using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Lifetime;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace CombatDBUI
{
    public class FightManagementHub : Hub
    {
        public void Hello()
        {
            Clients.All.hello();
        }
        public void StartTimer()
        {
            Clients.All.StartTimer();
        }
        public void StopTimer()
        {
            Clients.All.StopTimer();
        }

        public void ResetTimer()
        {
            Clients.All.ResetTimer();
        }
        public void UpdateRobotNames(string name1, string name2)
        {
            Clients.All.UpdateRobotNames(name1, name2);
        }
        public void ShowOutcome(string name1, string name2, string winType)
        {
            Clients.All.ShowOutcome(name1, name2, winType);
        }
    }
}