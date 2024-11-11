const getTotalIsles = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  function dfs(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === "W") {
      return;
    }

    grid[i][j] = "W";

    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }

  let islandCount = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "L") {
        dfs(i, j);
        islandCount++;
      }
    }
  }

  return islandCount;
};

module.exports = getTotalIsles;
