/**
 * 过滤器
 */

let adTagMap = {
    '新品': 'new',
    '爆品': 'hot',
    '首发': 'first',
    '满减': 'off'
}
export const adTagFilter = str => {
    if (!str) return '';
    if (str in adTagMap) return adTagMap.str;
    return 'new';
}