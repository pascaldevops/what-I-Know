using System;
using System.Net;

namespace Using
{
    class Program
    {
        static void Main(string[] args)
        {
            using(WebClient client = new WebClient())
            {
                string googlePage = client.DownloadString("http://www.google.com");
                System.Console.WriteLine(googlePage);
            }
        }
    }
}
