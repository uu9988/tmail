export default {
  async email(message, env, ctx) {
    await fetch(`https://complyeasily.com/api/report?to=${message.to}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream",
      },
      body: await new Response(message.raw).arrayBuffer(),
    });
  }
}
