using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BL.DAO
{
    public class page
    {
        private int currentPage;
        private int pageVolumn;
        private int totalNumber;

        public page(int currentPage, int pageVolumn)
        {
            this.currentPage = currentPage;
            this.pageVolumn = pageVolumn;
            this.totalNumber = 0;
        }

        public void setCurrentPage(int currentPage) { this.currentPage = currentPage; }

        public int getCurrentPage() { return this.currentPage; }

        public void setPageVolumn(int pageVolumn) { this.pageVolumn = pageVolumn; }

        public int getPageVolumn() { return this.pageVolumn; }

        public void setTotalNumber(int totalNumber) { this.totalNumber = totalNumber; }

        public int getTotalNumber() { return this.totalNumber; }

    }
}