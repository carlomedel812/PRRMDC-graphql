// tslint:disable: no-any
import { plugin, defaultClasses, DocumentType } from '@typegoose/typegoose';
import mongoose from 'mongoose';
import { ICursorPaginationResult } from '../core/interfaces/ICursorPaginationResult';

const MongoCursorPagination = require('mongo-cursor-pagination');
MongoCursorPagination.config.MAX_LIMIT = 500;
@plugin(MongoCursorPagination.mongoosePlugin) // https://github.com/mixmaxhq/mongo-cursor-pagination#with-mongoose
export class BaseModel extends defaultClasses.Base {
  static async cursorPaginate<T extends BaseModel>(
    options: IMongoCursorPaginationOptions,
  ): Promise<ICursorPaginationResult<DocumentType<T>>> {
    const result: IMongoCursorPaginationResult<DocumentType<T>> = await (this as any).paginate({
      ...options,
      next: options.next ?? undefined,
      previous: options.previous ?? undefined,
    });
    const { results, ...pageInfo } = result;

    const formattedResult: ICursorPaginationResult<DocumentType<T>> = {
      nodes: results,
      pageInfo: {
        hasNextPage: pageInfo.hasNext,
        hasPreviousPage: pageInfo.hasPrevious,
        startCursor: pageInfo.previous,
        endCursor: pageInfo.next,
      },
    };

    return formattedResult;
  }

  // Taken from https://github.com/typegoose/typegoose/issues/279#issuecomment-645368737
  static async withTransaction(
    fn: (session?: mongoose.ClientSession) => Promise<any>,
    existingSession?: mongoose.ClientSession,
  ): Promise<void> {
    if (existingSession) {
      if (existingSession.inTransaction()) return fn(existingSession);

      return existingSession.withTransaction(fn);
    }

    // Fallback
    const session = await mongoose.startSession();

    try {
      await session.withTransaction(fn);
    } finally {
      session.endSession();
    }
  }
}

interface IMongoCursorPaginationOptions {
  query?: object;
  limit?: number;
  fields?: object;
  paginatedField?: string;
  sortAscending?: boolean;
  next?: string | null;
  previous?: string | null;
}

interface IMongoCursorPaginationResult<T> {
  hasNext: boolean;
  hasPrevious: boolean;
  next: string;
  previous: string;
  results: T[];
}
