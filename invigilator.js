function loadInvigilatorContent(content, user) {
    content.innerHTML = `
        <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg shadow-sm">
                <h2 class="text-xl font-semibold mb-4">Invigilator: ${user.name}</h2>
                <div id="assignedCompetitions"></div>
            </div>
        </div>
    `;
    loadAssignedCompetitions(user.id);
}

async function loadAssignedCompetitions(invigilatorId) {
    const { data: competitions, error } = await supabase
        .from('competition_invigilators')
        .select(`
            competitions (
                id, name, scheduled_at, status,
                categories (name)
            )
        `)
        .eq('invigilator_id', invigilatorId);
    
    // Implementation for displaying competitions and participant reporting
}
