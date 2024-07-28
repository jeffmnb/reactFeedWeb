import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const getDateInRelationToNow = (publishedAt: Date) => {
    return formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });
};
