function loadTeamLeaderContent(content, user) {
    content.innerHTML = `
        <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg shadow-sm">
                <h2 class="text-xl font-semibold mb-4">Team: ${user.name}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button onclick="showParticipantRegistration(${user.id})" class="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700">
                        Register Participants
                    </button>
                    <button onclick="showTeamParticipants(${user.id})" class="bg-green-600 text-white p-4 rounded-lg hover:bg-green-700">
                        View Participants
                    </button>
                </div>
            </div>
            <div id="leaderContent"></div>
        </div>
    `;
}

async function showParticipantRegistration(teamId) {
    const [participants, competitions] = await Promise.all([
        supabase.from('participants').select('*, categories(name)').eq('team_id', teamId),
        supabase.from('competitions').select('*, categories(name, is_general)')
    ]);
    
    // Implementation for participant registration
}
