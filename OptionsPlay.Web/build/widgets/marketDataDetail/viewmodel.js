define(["jquery","knockout","modules/formatting","dataContext"],function(e,t,n,r){var i=function(){var e=this,n=100;this.activate=function(i){e.quote=t.unwrap(i.quote),e.quote.hasOptions===!0?(e.sellPrice5=e.quote.sellPrice5,e.sellPrice4=e.quote.sellPrice4,e.sellPrice3=e.quote.sellPrice3,e.sellPrice2=e.quote.sellPrice2,e.currentAskPrice=e.quote.currentAskPrice,e.currentBidPrice=e.quote.currentBidPrice,e.buyPrice2=e.quote.buyPrice2,e.buyPrice3=e.quote.buyPrice3,e.buyPrice4=e.quote.buyPrice4,e.buyPrice5=e.quote.buyPrice5,e.lastPrice=e.quote.lastPrice,e.openPrice=e.quote.openPrice,e.highPrice=e.quote.highPrice,e.lowPrice=e.quote.lowPrice,e.previousClose=e.quote.previousClose):(e.sellPrice5=e.quote.ask5,e.sellPrice4=e.quote.ask4,e.sellPrice3=e.quote.ask3,e.sellPrice2=e.quote.ask2,e.currentAskPrice=e.quote.ask,e.currentBidPrice=e.quote.bid,e.buyPrice2=e.quote.bid2,e.buyPrice3=e.quote.bid3,e.buyPrice4=e.quote.bid4,e.buyPrice5=e.quote.bid5,e.lastPrice=e.quote.latestTradedPrice,e.openPrice=e.quote.openingPrice,e.highPrice=e.quote.highestPrice,e.lowPrice=e.quote.lowestPrice,e.previousClose=e.quote.previousSettlementPrice),e.sellVolume1=Math.round(e.quote.sellVolume1()/n),e.sellVolume2=Math.round(e.quote.sellVolume2()/n),e.sellVolume3=Math.round(e.quote.sellVolume3()/n),e.sellVolume4=Math.round(e.quote.sellVolume4()/n),e.sellVolume5=Math.round(e.quote.sellVolume5()/n),e.askVolume=Math.round(e.quote.askVolume/n),e.askVolume2=Math.round(e.quote.askVolume2/n),e.askVolume3=Math.round(e.quote.askVolume3/n),e.askVolume4=Math.round(e.quote.askVolume4/n),e.askVolume5=Math.round(e.quote.askVolume5/n),e.buyVolume1=Math.round(e.quote.buyVolume1()/n),e.buyVolume2=Math.round(e.quote.buyVolume2()/n),e.buyVolume3=Math.round(e.quote.buyVolume3()/n),e.buyVolume4=Math.round(e.quote.buyVolume4()/n),e.buyVolume5=Math.round(e.quote.buyVolume5()/n),e.bidVolume=Math.round(e.quote.bidVolume/n),e.bidVolume2=Math.round(e.quote.bidVolume2/n),e.bidVolume3=Math.round(e.quote.bidVolume3/n),e.bidVolume4=Math.round(e.quote.bidVolume4/n),e.bidVolume5=Math.round(e.quote.bidVolume5/n),e.change=e.quote.change,e.volume=e.quote.volume,e.uncoveredPositionQuantity=e.quote.uncoveredPositionQuantity,e.changePercentage=e.quote.changePercentage,e.limitUp=e.quote.limitUpPrice||t.observable(0),e.limitDown=e.quote.limitDownPrice||t.observable(0),e.openInterest=t.observable(),e.code=e.quote.optionNumber||e.quote.securityCode,e.name=e.quote.name||e.quote.securityName,e.quote.optionNumber&&r.optionBasic.get(e.quote.optionNumber).done(function(t){e.limitUp(t.limitUpPrice),e.limitDown(t.limitDownPrice),e.openInterest(t.openInterest)})}};return i});