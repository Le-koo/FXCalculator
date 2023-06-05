import "../Css/Statistika.css";

function Statistika() {
  return (
    <div class="statistika">
      

<center>
    <h1 className="naslov">Pratite vrijednost Eura uživo</h1>

    <iframe src="https://www.widgets.investing.com/live-currency-cross-rates?theme=darkTheme&hideTitle=true&roundedCorners=true&pairs=1,6,9,10,16,15,52,9284,1604,1605,1606,962661,1607,1059870,1608,950997,1609,1610,1611,1612,1613,1614,1615,1616,1617,1618,1619,1620,1621,1622,1192288,1623,1624,1625,1626,1627,156,1629,44,1630,1631,1634,1635,1636,1013386,1638,1639,1640,1641,148,1642,1644,117,1645,64,1646,1647,1648,1649,1650,1651,1652,1653,158,1654,1655,1656,1657,1658,1659,1660,1663,1664,1665,1666,1668,1669,1670,1671,1673,1674,101,1675,941147,1676,1677,1678,37,1679,1680,1681,1682,1683,1684,1685,46,1686,1687,1689,1690,1691,993160,1692,1693,1694,1696,1697,61,102,1699,1701,1702,1703,1704,94,962662,1705,66,1706,1707,1708,1709,1710,1711,1712,1714,1715,1716,9608,1717,1718,100,1722,1089816" width="50%" height="500px" frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0"></iframe>

    <h1 className="naslov">Pratite vrijednost crypto valuta uživo</h1>

    <iframe src="https://www.widgets.investing.com/crypto-currency-rates?theme=darkTheme&hideTitle=true&roundedCorners=true&pairs=1001803,1010773,1119409,1170216,1169563,1061960,1170276,1195641" width="50%" height="300px" frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0"></iframe>

</center>
    </div>
  );
}

export default Statistika;