let restaurant = {
    name: "AL4Sic",
    guestCap: 75,
    guestCount: 0,
    checkSTS: function (guestCount) {
        let seatsLeft = this.guestCap - this.guestCount;
        return guestCount <= seatsLeft;
    },
    seatParty: function (count = 0) {
        this.guestCount = this.guestCount + count;
        this.printNewCount();
    },
    removeParty: function (count) {
        this.guestCount = this.guestCount - count;
        this.printNewCount();
    },
    printNewCount: function () {
        console.log("new count is ", this.guestCount);
    }
}
restaurant.seatParty(70);
console.log(restaurant.checkSTS(4))
restaurant.seatParty(4);
restaurant.removeParty(12);