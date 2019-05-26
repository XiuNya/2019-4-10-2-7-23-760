const main = require('../main/main');

describe('taxi fee', function () {
    //首先处理基础情况，无停车，分段计费
    //case 1:两公里以内，收起步价6块
    it('within 2km and  no parking' , function() {
        let inputs = {distance:1,parkTime:0};
        let summary = main(inputs);
        let expected = 6;
        expect(summary).toEqual(expected);
    });
    //case2：八公里以上，加收50%的每公里运价
    //八公里以上，费用为6+（8-2）*0.8+（distance-8）*0.8*1.5，简化得到1.2*distance+1.2
    it('within 2km and  no parking' , function() {
        let inputs = {distance:14,parkTime:0};
        let summary = main(inputs);
        let expected = 18;
        expect(summary).toEqual(expected);
    });
    //case3：两公里以上，八公里以下，每公里运价0.8元
    //两公里以上，八公里一下，费用为6+（distance-2）*0.8，简化得到0.8*distance+4.4
    it('within 2km and  no parking' , function() {
        let inputs = {distance:7,parkTime:0};
        let summary = main(inputs);
        let expected = 10;
        expect(summary).toEqual(expected);
    });

    //将停车等待加时加收费用计入
    it('within 2km and  no parking' , function() {
        let inputs = {distance:7,parkTime:8};
        let summary = main(inputs);
        let expected = 12;
        expect(summary).toEqual(expected);
    });

    //前面的测试用例均避开了小数点，此时将总费用合并封装为函数，同时实现四舍五入功能
    //五入
    it('within 2km and  no parking' , function() {
        let inputs = {distance:7,parkTime:10};
        let summary = main(inputs);
        let expected = 13;
        expect(summary).toEqual(expected);
    });
    //四舍
    it('within 2km and parking' , function() {
        let inputs = {distance:1,parkTime:5};
        let summary = main(inputs);
        let expected = 7;
        expect(summary).toEqual(expected);
    });
    
    
    /*it('within 2km and parking' , function() {
        let inputs = {distance:1,parkTime:5};
        let summary = main(inputs);
        let expected = 7;
        expect(summary).toEqual(expected);
    });
    it('between 2km and 8km and parking' , function() {
        let inputs = {distance:7,parkTime:10};
        let summary = main(inputs);
        let expected = 13;
        expect(summary).toEqual(expected);
    });
    it('more than 8km and parking' , function() {
        let inputs = {distance:10,parkTime:20};
        let summary = main(inputs);
        let expected = 18;
        expect(summary).toEqual(expected);
    });
    it('more than 8km and no parking' , function() {
        let inputs = {distance:15,parkTime:0};
        let summary = main(inputs);
        let expected = 19;
        expect(summary).toEqual(expected);
    });*/
});
