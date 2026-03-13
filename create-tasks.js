import fs from 'fs';

const unitsFile = 'planning/strona-internetowa-z-reksiem-dla-dzieci-2026-03-13-01-59/implementation_units.json';
const units = JSON.parse(fs.readFileSync(unitsFile, 'utf8'));

const url = process.env.SAMURAI_MEMORY_URL + '/api/tasks';
const apiKey = process.env.SAMURAI_MEMORY_API_KEY;
const projectId = process.env.SAMURAI_MEMORY_PROJECT_ID;

async function run() {
  const result = {};
  for (const unit of units) {
    const title = `[${unit.id}] ${unit.title}`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          status: 'todo',
          projectId: projectId
        })
      });

      if (!response.ok) {
        console.error(`Failed to create task for ${unit.id}: ${response.status} ${response.statusText}`);
        const text = await response.text();
        console.error('Response:', text);
        result[unit.id] = null;
        continue;
      }

      const data = await response.json();
      result[unit.id] = data.id || data.taskId || data._id || data.task?.id || data.data?.id || (data && data.id) || null;
      if (!result[unit.id]) {
        console.log("No id found in response:", data);
        result[unit.id] = data; // fallback
      }
    } catch (e) {
      console.error(`Error for ${unit.id}:`, e);
      result[unit.id] = null;
    }
  }

  fs.writeFileSync('planning/strona-internetowa-z-reksiem-dla-dzieci-2026-03-13-01-59/samurai_tasks.json', JSON.stringify(result, null, 2));
  console.log('Done!');
}

run();