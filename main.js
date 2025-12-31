function generateDemo() {
    const output = document.getElementById("demo-output");

    const demoTable = `
        <h3>Sample Timetable (Demo)</h3>
        <table border="1" style="width:100%; border-collapse: collapse;">
            <tr>
                <th>Day</th>
                <th>9-10 AM</th>
                <th>10-11 AM</th>
                <th>11-12 PM</th>
            </tr>
            <tr>
                <td>Monday</td>
                <td>Math</td>
                <td>Physics</td>
                <td>Free</td>
            </tr>
            <tr>
                <td>Tuesday</td>
                <td>C Programming</td>
                <td>Lab</td>
                <td>Free</td>
            </tr>
        </table>
    `;

    output.innerHTML = demoTable;
}